const express = require('express');
const router = express.Router(); 
const boardsController =  require('../controllers/boardsController');
const cardsController =  require('../controllers/cardsController');
const listsController =  require('../controllers/listsController');
const membersController =  require('../controllers/membersController'); 


router.get('/board/:_id', boardsController.getBoardById);
router.post('/board', boardsController.createBoard);
router.put('/board/:_id', boardsController.updateBoard);
router.delete('/board/:_id', boardsController.deleteBoard);

router.get('/card', cardsController.getCards);
router.post('/card', cardsController.createCard);
router.put('/card', cardsController.updateCard);
router.delete('/card', cardsController.deleteCard);  

router.get('/list', listsController.getListById);
//router.get('/list/:_id', foldersController.getFolderById);
router.post('/list', listsController.createList);
router.put('/list', listsController.updateList);
router.delete('/list', listsController.deleteList);

router.get('/member', membersController.getMember);
router.post('/member', membersController.createMember);
router.put('/member', membersController.updateMember);
router.delete('/member/:_id', membersController.deleteMember); 

module.exports = router;
