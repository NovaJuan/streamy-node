import {Router} from 'express';
import {getSongs,getOneSong,addSong,deleteSong,updatedSong,getSongFile,downloadSong} from '../controllers/index';
import multer from '../libs/multer';

const router = Router();

router.route('/')
    .get(getSongs)
    .post(multer.single('song'),addSong);

router.route('/:id')
    .get(getOneSong)
    .delete(deleteSong)
    .put(updatedSong);

router.get('/file/:file',getSongFile);

export default router;