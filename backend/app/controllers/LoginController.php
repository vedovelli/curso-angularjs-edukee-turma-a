<?php

class LoginController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function login()
	{
		extract(Input::all());
		Auth::attempt(['email' => $email, 'password' => $password]);
		return Response::json(['response' => 'true', 'user' => Auth::user()->toArray()], 200);
	}

	public function logout()
	{
		Auth::logout();
		return Response::json(['response' => 'true'], 200);
	}

	public function isLogged()
	{
		if(Auth::check())
		{
			return Response::json(['response' => 'true', 'user' => Auth::user()->toArray()], 200);
		}
		return Response::json(['response' => 'false'], 200);
	}

}
