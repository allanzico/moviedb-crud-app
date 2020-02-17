<?php

namespace App\Controller;

use App\Entity\Genre;
use App\Entity\Movie;
use App\Repository\MovieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MovieController extends AbstractController
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
     * @Route("/api/movies", name="movies", methods={"GET"})
     */
    public function index()
    {
            return $this->transformAll();
    }


    //Get single movie by ID

    /**
     * @Route("/api/movies/{movie}", name="get_movie", methods={"GET"})
     * @param Movie $movie
     * @return Response
     */
    public function getOneMovie(Movie $movie)
    {
        $data = $this->transformSingleMovie($movie);
        return new JsonResponse($data);

    }

  //Transform single movie from database to ARRAY
    /**
     * @param Movie $movie
     * @return array
     */
    public function  transformSingleMovie(Movie $movie){
        return [
            'id' => $movie->getId(),
            'title'=> $movie->getTitle(),
            'created_at'=>$movie->getCreatedAt(),
            'updated_at'=>$movie->getUpdatedAt(),
            'year_produced'=>$movie->getYearProduced(),
            'genre_id'=>$movie->getGenre()->getId(),
            'genre_name'=>$movie->getGenre()->getName()
        ];
    }

    //Transform All movies with a foreach
    public function transformAll(){
     $movies = $this->entityManager->getRepository(Movie::class)->findAll();
     $moviesArray = [];

     foreach ($movies as $movie){
         $moviesArray[]= $this->transformSingleMovie($movie);
     }

     return new  JsonResponse($moviesArray);

    }

    /**
     * @Route("/api/add_movie", name="add_movie", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function addNewMovie(Request $request){
        $data = json_decode($request->getContent(),true);
        $movie = new Movie();
        $movie->setTitle($data['title'])
            ->setCreatedAt()
            ->setUpdateAt()
            ->setYearProduced($data['year_produced'])
            ->setGenre($this->entityManager->find(Genre::class, $data['genre_id']));

        $this->entityManager->persist($movie);
        $this->entityManager->flush();

        return new JsonResponse($data);
    }

    /**
     * @Route("/api/movie/update/{movie}", name="update_movie", methods={"PUT"})
     * @param Movie $movie
     * @param Request $request
     * @return JsonResponse
     */
    public function updateMovie(Movie $movie, Request $request)
    {
        $data = json_decode($request->getContent(),true);
        $movie->setTitle($data['title'])
            ->setCreatedAt()
            ->setUpdateAt()
            ->setYearProduced($data['year_produced'])
            ->setGenre($this->entityManager->find(Genre::class, $data['genre_id']));
        $this->entityManager->persist($movie);
        $this->entityManager->flush();

        return new JsonResponse($data);
    }

    /**
     * @Route("/api/movie/delete/{movie}", name="delete_movie", methods={"DELETE"})
     * @param Movie $movie
     * @return JsonResponse
     */

    public function deleteMovie(Movie $movie){

        if ($movie) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($movie);
            $entityManager->flush();
        }

        return new JsonResponse(['text'=>'Movie with id '.$movie->getId().' deleted successful']);

    }

}
