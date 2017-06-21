const express = require('express');
const router = express.Router(); 
const boardsController =  require('../controllers/boardsController');
const cardsController =  require('../controllers/cardsController');
const listsController =  require('../controllers/listsController');
const membersController =  require('../controllers/membersController'); 
const authController =  require('../controllers/authController'); 
const authenticate = require('../authenticate');

router.get('/board/:_id', authenticate, boardsController.getBoardById);
router.get('/board/:idUser', boardsController.getBoardByUserId);
router.post('/board', authenticate, boardsController.createBoard);
router.put('/board/:_id', authenticate, boardsController.updateBoard);
router.delete('/board/:_id', authenticate, boardsController.deleteBoard);

router.get('/card', authenticate, cardsController.getCards);
router.post('/card', authenticate, cardsController.createCard);
router.put('/card', authenticate, cardsController.updateCard);
router.delete('/card', authenticate,  cardsController.deleteCard);  

router.get('/list', authenticate, listsController.getListById);
//router.get('/list/:_id', foldersController.getFolderById);
router.post('/list', authenticate, listsController.createList);
router.put('/list', authenticate, listsController.updateList);
router.delete('/list', authenticate, listsController.deleteList);


router.get('/member', authenticate, membersController.getMember);
router.get('/member/:identifier', authenticate, membersController.getMemberByUsernameEmail); 
router.post('/member', authenticate, membersController.createMember);
router.put('/member', authenticate, membersController.updateMember);
router.delete('/member/:_id', authenticate, membersController.deleteMember); 

router.post('/auth', authController.setUserAuthentication);

module.exports = router;
