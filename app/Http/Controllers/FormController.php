<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function showForm()
    {
        return Inertia::render('Forms/InfoFormComponent');
    }

    public function submitForm(Request $request)
    {
    	return response()->json([$request->all()]);
    }
}
