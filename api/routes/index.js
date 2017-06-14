const express = require('express');
const router = express.Router();
const boardController =  require('../controllers/boardController');
const cardController =  require('../controllers/cardController');
const listController =  require('../controllers/listController');
const memberController =  require('../controllers/memberController');

router.get('/board', boardController.getBoards);
router.post('/board', boardController.createBoard);
router.put('/board', boardController.updateBoard);
router.delete('/board', boardController.deleteBoard);

router.get('/card', cardController.getCards);
router.post('/card', cardController.createCard);
router.put('/card', cardController.updateCard);
router.delete('/card', cardController.deleteCard);  

router.get('/list', listController.getLists);
//router.get('/list/:_id', foldersController.getFolderById);
router.post('/list', listController.createList);
router.put('/list', listController.updateList);
router.delete('/list', listController.deleteList);

router.get('/member', memberController.getMember);
router.post('/member', memberController.createMember);
router.put('/member', memberController.updateMember);
router.delete('/member', memberController.deleteMember);

module.exports = router;
