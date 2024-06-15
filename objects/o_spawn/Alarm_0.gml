/// @DnDAction : YoYo Games.Instances.Create_Instance
/// @DnDVersion : 1
/// @DnDHash : 3ACD5486
/// @DnDArgument : "objectid" "o_enemy_1"
/// @DnDSaveInfo : "objectid" "o_enemy_1"
instance_create_layer(0, 0, "Instances", o_enemy_1);

/// @DnDAction : YoYo Games.Instances.Create_Instance
/// @DnDVersion : 1
/// @DnDHash : 19E29B88
/// @DnDArgument : "xpos" "o_enemy_1.x"
/// @DnDArgument : "ypos" "o_enemy_1.y"
/// @DnDArgument : "objectid" "o_bullet_enemy"
/// @DnDSaveInfo : "objectid" "o_bullet_enemy"
instance_create_layer(o_enemy_1.x, o_enemy_1.y, "Instances", o_bullet_enemy);

/// @DnDAction : YoYo Games.Instances.Set_Alarm
/// @DnDVersion : 1
/// @DnDHash : 01B385E0
/// @DnDArgument : "steps" "60"
alarm_set(0, 60);