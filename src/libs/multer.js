import multer from 'multer';
import path from 'path';
import uuid from 'uuid/v4';

const storage  = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,path.resolve('../../songs'));
    },
    filename:(req,file,cb)=>{
        cb(null,uuid() + path.extname(file.originalname));
    }
});

export default multer({storage});