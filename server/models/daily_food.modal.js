const { ObjectId } = require("mongodb");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        // user_id: 
        //   {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
        // ,
        user_id : ObjectId,
        date: Date,
        water: Number,
        breakfast : Array,
        lunch : Array,
        dinner : Array,
        snack : Array
      },
    );
    const Food = mongoose.model("daily_food", schema);
    return Food;
};