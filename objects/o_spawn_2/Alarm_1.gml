/// @DnDAction : YoYo Games.Instances.Create_Instance
/// @DnDVersion : 1
/// @DnDHash : 2C86DD45
/// @DnDArgument : "xpos" "o_boss.x"
/// @DnDArgument : "ypos" "o_boss.y"
/// @DnDArgument : "objectid" "o_bullet_boss"
/// @DnDSaveInfo : "objectid" "o_bullet_boss"
instance_create_layer(o_boss.x, o_boss.y, "Instances", o_bullet_boss);

/// @DnDAction : YoYo Games.Instances.Set_Alarm
/// @DnDVersion : 1
/// @DnDHash : 315D3E75
/// @DnDArgument : "alarm" "1"
alarm_set(1, 30);