/// @DnDAction : YoYo Games.Instances.Create_Instance
/// @DnDVersion : 1
/// @DnDHash : 0D0EF789
/// @DnDArgument : "objectid" "o_enemy_2"
/// @DnDSaveInfo : "objectid" "o_enemy_2"
instance_create_layer(0, 0, "Instances", o_enemy_2);

/// @DnDAction : YoYo Games.Instances.Create_Instance
/// @DnDVersion : 1
/// @DnDHash : 11E89249
/// @DnDArgument : "xpos" "o_enemy_2.x"
/// @DnDArgument : "ypos" "o_enemy_2.y"
/// @DnDArgument : "objectid" "o_bullet_enemy"
/// @DnDSaveInfo : "objectid" "o_bullet_enemy"
instance_create_layer(o_enemy_2.x, o_enemy_2.y, "Instances", o_bullet_enemy);

/// @DnDAction : YoYo Games.Instances.Set_Alarm
/// @DnDVersion : 1
/// @DnDHash : 4EE7207E
/// @DnDArgument : "steps" "120"
/// @DnDArgument : "alarm" "1"
alarm_set(1, 120);