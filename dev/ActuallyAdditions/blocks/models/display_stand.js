var render = new ICRender.Model();
var model = BlockRenderer.createModel();
	model.addBox(0/16, 0/16, 0/16, 16/16, 1/16, 16/16, [["block_display_stand", 0]]);
	model.addBox(1/16, 1/16, 1/16, 15/16, 7/16, 15/16, [["block_giant_chest_top", 0]]);
	model.addBox(0/16, 1/16, 3/16, 16/16, 2/16, 13/16, [["block_display_stand_side", 0]]);
	model.addBox(3/16, 1/16, 0/16, 13/16, 2/16, 16/16, [["block_display_stand_side", 0]]);
	model.addBox(0/16, 2/16, 5/16, 16/16, 3/16, 11/16, [["block_display_stand_side", 0]]);
	model.addBox(5/16, 2/16, 0/16, 11/16, 3/16, 16/16, [["block_display_stand_side", 0]]);
	model.addBox(5/16, 5/16, 0/16, 11/16, 6/16, 16/16, [["block_display_stand_side", 0]]);
	model.addBox(0/16, 5/16, 5/16, 16/16, 6/16, 11/16, [["block_display_stand_side", 0]]);
	model.addBox(3/16, 6/16, 0/16, 13/16, 7/16, 16/16, [["block_display_stand_side", 0]]);
	model.addBox(0/16, 6/16, 3/16, 16/16, 7/16, 13/16, [["block_display_stand_side", 0]]);
	model.addBox(0/16, 7/16, 0/16, 16/16, 8/16, 16/16, [["block_display_stand", 0]]);
	model.addBox(6/16, 8/16, 6/16, 10/16, 9/16, 10/16, [["block_display_stand", 0]]);
	model.addBox(4/16, 8/16, 6/16, 6/16, 9/16, 10/16, [["block_display_stand", 0]]);
	model.addBox(10/16, 8/16, 6/16, 12/16, 9/16, 10/16, [["block_display_stand", 0]]);
	model.addBox(6/16, 8/16, 10/16, 10/16, 9/16, 12/16, [["block_display_stand", 0]]);
	model.addBox(6/16, 8/16, 4/16, 10/16, 9/16, 6/16, [["block_display_stand", 0]]);
	model.addBox(0/16, 6/16, 0/16, 1/16, 9/16, 1/16, [["block_display_stand", 0]]);
	model.addBox(15/16, 6/16, 0/16, 16/16, 9/16, 1/16, [["block_display_stand", 0]]);
	model.addBox(15/16, 6/16, 15/16, 16/16, 9/16, 16/16, [["block_display_stand", 0]]);
	model.addBox(0/16, 6/16, 15/16, 1/16, 9/16, 16/16, [["block_display_stand", 0]]);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.block_display_stand, 0, render);
Block.setBlockShape(BlockID.block_display_stand, {x: 0, y: 0, z: 0}, {x: 1, y: 9/16, z: 1});