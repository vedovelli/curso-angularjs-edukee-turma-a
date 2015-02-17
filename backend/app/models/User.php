<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface{

	use UserTrait, RemindableTrait;

	protected $hidden = ['password', 'remember_token'];

	protected $fillable = ['first_name', 'last_name', 'email', 'password', 'city', 'state'];

	public function users()
	{
		return self::all();
	}

	public function createUser()
	{
		$input = Input::all();
		$input['password'] = Hash::make($input['password']);
		$user = new User();
		$user->fill($input);
		$user->save();
		return $user;
	}

	public function get($id)
	{
		return self::find($id);
	}

	public function updateUser($id)
	{
		$user = self::find($id);
		if(!is_null($user))
		{
			$input = Input::all();
			if(isset($input['password']))
			{
				$input['password'] = Hash::make($input['password']);
			}
			$user->fill($input);
			return $user->save();
		}
		return false;
	}

	public function removeUser($id)
	{
		if(!is_null(self::find($id)))
		{
			return self::find($id)->delete();
		}
		return false;
	}

}
