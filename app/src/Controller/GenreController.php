<?php

namespace App\Controller;

use App\Entity\Genre;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class GenreController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    

    /**
     * @Route("/api/genre", name="genre",methods={"GET"})
     */
    public function index()
    {
        return $this->transformAll();
    }

    //Transform single Genre from database to array

    /**
     * @param Genre $genre
     * @return array
     */
    public function  transformSingleGenre(Genre $genre){
        return [
            'id' =>  $genre->getId(),
            'name' => $genre->getName()

        ];
    }

    //Transform All Genres with a foreach
    public function transformAll(){
        $genres = $this->entityManager->getRepository(Genre::class)->findAll();
        $genreArray = [];

        foreach ($genres as $genre){
            $genreArray[$genre->getId()]= $this->transformSingleGenre($genre);
        }

        return new  JsonResponse($genreArray);

    }
}
