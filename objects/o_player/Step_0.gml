/// @DnDAction : YoYo Games.Instance Variables.If_Score
/// @DnDVersion : 1
/// @DnDHash : 158B7A9F
/// @DnDArgument : "op" "4"
/// @DnDArgument : "value" "100"
if(!variable_instance_exists(id, "__dnd_score")) __dnd_score = 0;
if(__dnd_score >= 100)
{
	/// @DnDAction : YoYo Games.Rooms.Go_To_Room
	/// @DnDVersion : 1
	/// @DnDHash : 7B2C6F79
	/// @DnDParent : 158B7A9F
	/// @DnDArgument : "room" "r_boss"
	/// @DnDSaveInfo : "room" "r_boss"
	room_goto(r_boss);
}