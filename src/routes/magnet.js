import { Router } from 'express';
import { torrent2magnet } from 'torrent2magnet';

const router = Router();

// router.get('/', (req, res) => { 
//   res.json({ route: req.originalUrl }) 
// });

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express!</h1>');
  res.end();
});

router.post('/', (req, res) => {
  torrent2magnet(req.body.url).then(uri => {
    return res.json({ uri: uri });
  }).catch(err => {
    throw new Error(err);
  });
});

export default router;
