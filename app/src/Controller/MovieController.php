<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MovieController extends AbstractController
{
    /**
     * @Route("/api/movies", name="movie")
     */
    public function index()
    {
        $data = [
            'title' => 'The Princess Bride',
            'count' => 0
        ];
       return new  JsonResponse($data);
    }
}
