const express = require('express');
const router = express.Router();

// Create an item
router.post('/', async (req, res) => {
    try {
        res.status(201).json({ message: 'Item created' })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all items
router.get('/', async (req, res) => {
    try {
        res.json({ message: 'Get all items' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// // Get an item by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id);
//         if (item == null) {
//             return res.status(404).json({ message: 'Item not found' });
//         }
//         res.json(item);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Update an item by ID
// router.put('/:id', async (req, res) => {
//     try {
//         const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedItem);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Delete an item by ID
// router.delete('/:id', async (req, res) => {
//     try {
//         const deletedItem = await Item.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Item deleted', item: deletedItem });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

module.exports = router;
