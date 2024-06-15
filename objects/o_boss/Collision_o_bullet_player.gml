/// @DnDAction : YoYo Games.Instance Variables.Set_Score
/// @DnDVersion : 1
/// @DnDHash : 18CF1260
/// @DnDApplyTo : {o_player}
/// @DnDArgument : "score" "1"
/// @DnDArgument : "score_relative" "1"
with(o_player) {
if(!variable_instance_exists(id, "__dnd_score")) __dnd_score = 0;
__dnd_score += real(1);
}

/// @DnDAction : YoYo Games.Instances.Set_Sprite
/// @DnDVersion : 1
/// @DnDHash : 7B3AC244
/// @DnDArgument : "spriteind" "s_exp"
/// @DnDSaveInfo : "spriteind" "s_exp"
sprite_index = s_exp;
image_index = 0;

/// @DnDAction : YoYo Games.Instances.Sprite_Animation_Speed
/// @DnDVersion : 1
/// @DnDHash : 4C8B888B
image_speed = 1;

/// @DnDAction : YoYo Games.Instances.Set_Alarm
/// @DnDVersion : 1
/// @DnDHash : 7FCC6ADD
/// @DnDArgument : "steps" "10"
alarm_set(0, 10);