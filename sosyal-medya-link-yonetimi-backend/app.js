const express = require('express');
const connectDB = require('./db');
const User = require('./user');
const SocialMedia = require('./socialmedia');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());

// CORS'u etkinleştirin
app.use(cors()); // Bu satırı ekleyin

// MongoDB bağlantısını başlat
connectDB();

// Swagger UI ayarları
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Kullanıcı oluşturma (Create)
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Tüm kullanıcıları getirme (Read All)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Belirli bir kullanıcıyı getirme (Read One)
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kullanıcı giriş kontrolü
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Kullanıcıyı kullanıcı adına göre bul
    const user = await User.findOne({ username });

    // Eğer kullanıcı bulunamazsa hata döndür
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Şifreyi doğrula
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Şifre doğruysa, kullanıcı bilgilerini döndür (şifre hariç)
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kullanıcı güncelleme (Update)
app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kullanıcı silme (Delete)
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sosyal medya hesabı ekleme (Create)
app.post('/socialmedia', async (req, res) => {
  try {
    const socialMedia = new SocialMedia(req.body);
    await socialMedia.save();
    res.status(201).json(socialMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kullanıcının sosyal medya hesaplarını getirme
app.get('/users/:userId/socialmedia', async (req, res) => {
    try {
      const userId = req.params.userId;
      const socialMediaAccounts = await SocialMedia.find({ userId });
      
      if (socialMediaAccounts.length === 0) {
        return res.status(404).json({ message: 'No social media accounts found for this user' });
      }
      
      res.status(200).json(socialMediaAccounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  
// Tüm sosyal medya hesaplarını getirme (Read All)
app.get('/socialmedia', async (req, res) => {
  try {
    const socialMediaAccounts = await SocialMedia.find();
    res.status(200).json(socialMediaAccounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Belirli bir sosyal medya hesabını getirme (Read One)
app.get('/socialmedia/:id', async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findById(req.params.id);
    if (!socialMedia) {
      return res.status(404).json({ message: 'Social Media account not found' });
    }
    res.status(200).json(socialMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sosyal medya hesabı güncelleme (Update)
app.put('/socialmedia/:id', async (req, res) => {
  try {
    const updatedSocialMedia = await SocialMedia.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedSocialMedia) {
      return res.status(404).json({ message: 'Social Media account not found' });
    }
    res.status(200).json(updatedSocialMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sosyal medya hesabı silme (Delete)
app.delete('/socialmedia/:id', async (req, res) => {
  try {
    const deletedSocialMedia = await SocialMedia.findByIdAndDelete(req.params.id);
    if (!deletedSocialMedia) {
      return res.status(404).json({ message: 'Social Media account not found' });
    }
    res.status(200).json({ message: 'Social Media account deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Diğer CRUD işlemleri burada tanımlanabilir

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {});
