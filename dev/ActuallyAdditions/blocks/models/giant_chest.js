var render = new ICRender.Model();
var model = BlockRenderer.createModel();
model.addBox(1/16, 1/16, 1/16, 15/16, 15/16, 15/16, [["block_giant_chest_top", 0]]);
model.addBox(0/16, 0/16, 10/16, 1/16, 16/16, 13/16, [["block_giant_chest_large", 0]]);
model.addBox(15/16, 0/16, 3/16, 16/16, 16/16, 6/16, [["block_giant_chest_large", 0]]);
model.addBox(10/16, 0/16, 15/16, 13/16, 16/16, 16/16, [["block_giant_chest_large", 0]]);
model.addBox(3/16, 0/16, 0/16, 6/16, 16/16, 1/16, [["block_giant_chest_large", 0]]);
model.addBox(1/16, 15/16, 1/16, 15/16, 16/16, 15/16, [["block_giant_chest_top", 0]]);
model.addBox(1/16, 0/16, 1/16, 15/16, 1/16, 15/16, [["block_giant_chest_top", 0]]);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.block_giant_chest, 0, render);