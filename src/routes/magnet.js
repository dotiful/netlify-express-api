import { Router } from 'express';
import { torrent2magnet } from 'torrent2magnet';

const router = Router();

router.get('/', (req, res) => { res.json({ route: req.originalUrl }) });

router.post('/', (req, res) => {
  torrent2magnet(req.body.url).then(uri => {
    return res.send(uri);
  }).catch(err => {
    throw new Error(err);
  });
});

export default router;
