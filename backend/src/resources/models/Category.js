const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: { type: String, required: true },
        child: { type: Schema.Types.ObjectId, ref: 'Category' },
        slug: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Category', Category);