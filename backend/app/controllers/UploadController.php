<?php

class UploadController extends BaseController
{
  public function receive()
  {
    $fileObj = Input::file()['file'];
    $fileObj->move(public_path().'/app/images', $fileObj->getClientOriginalName());
    return Response::json(['success' => true]);
  }
}