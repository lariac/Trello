const express = require('express');
const router = express.Router(); 
const boardsController =  require('../controllers/boardsController');
const cardsController =  require('../controllers/cardsController');
const listsController =  require('../controllers/listsController');
const membersController =  require('../controllers/membersController'); 
const authController =  require('../controllers/authController'); 
const authenticate = require('../authenticate');

router.get('/board/user/:_id', authenticate, boardsController.getBoardByUserId);
router.get('/board/:_id',  boardsController.getBoardById);
router.post('/board', authenticate, boardsController.createBoard);
router.put('/board/:_id', authenticate, boardsController.updateBoard);
router.delete('/board/:_id', authenticate, boardsController.deleteBoard);

router.get('/card', authenticate, cardsController.getCards);
router.post('/card', cardsController.createCard);
router.put('/card/:id', cardsController.updateCard);
router.delete('/card', authenticate,  cardsController.deleteCard);  

router.get('/list/:_id', listsController.getListByBoardId);
//router.get('/list/:_id', foldersController.getFolderById);
router.post('/list', listsController.createList);
router.put('/list', listsController.updateList);
router.delete('/list/:_id', authenticate, listsController.deleteList);


router.get('/member', authenticate, membersController.getMember);
router.get('/member/:identifier', membersController.getMemberByUsernameEmail); 
router.post('/member', membersController.createMember);
router.put('/member', authenticate, membersController.updateMember);
router.delete('/member/:_id', authenticate, membersController.deleteMember); 

router.post('/auth', authController.setUserAuthentication);

module.exports = router;
