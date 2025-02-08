<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LogoutController extends Controller
{
    public function logout(Request $request)
{
    $request->user()->tokens()->delete();

    return response()->json([
        "message" => "Đã đăng xuất thành công"
    ]);
}

}
