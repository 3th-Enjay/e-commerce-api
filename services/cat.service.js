const catmodel = require("../schema/category.schema");

class CatService {
    
   async createCat (cateInfo) {
        const newCat = new catmodel(cateInfo);
        const savedCat = await newCat.save();
        return savedCat;
   }        

   async findAllCats () {
        const allCats = await catmodel.find();
        return allCats
   }

   async findOneCat (id) {
        const foundCat = await catmodel.findOne({_id: id});
        return foundCat
   }

   async updateOneCat (id, catInfo) {
        const updated = await catmodel.findOneAndUpdate({_id: id}, catInfo, {new: true});
        return updated
   }

   async deleteOneCat (id) {
        const deleted = await catmodel.findOneAndDelete({_id: id});
        return deleted
   }
}

const catInstance = new CatService();

module.exports = catInstance;