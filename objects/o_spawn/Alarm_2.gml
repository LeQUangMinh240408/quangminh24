/// @DnDAction : YoYo Games.Instances.Create_Instance
/// @DnDVersion : 1
/// @DnDHash : 00C0F0BE
/// @DnDArgument : "objectid" "o_enemy_3"
/// @DnDSaveInfo : "objectid" "o_enemy_3"
instance_create_layer(0, 0, "Instances", o_enemy_3);

/// @DnDAction : YoYo Games.Instances.Create_Instance
/// @DnDVersion : 1
/// @DnDHash : 1E578532
/// @DnDArgument : "xpos" "o_enemy_3.x"
/// @DnDArgument : "ypos" "o_enemy_3.y"
/// @DnDArgument : "objectid" "o_bullet_enemy"
/// @DnDSaveInfo : "objectid" "o_bullet_enemy"
instance_create_layer(o_enemy_3.x, o_enemy_3.y, "Instances", o_bullet_enemy);

/// @DnDAction : YoYo Games.Instances.Set_Alarm
/// @DnDVersion : 1
/// @DnDHash : 27758407
/// @DnDArgument : "steps" "180"
/// @DnDArgument : "alarm" "2"
alarm_set(2, 180);