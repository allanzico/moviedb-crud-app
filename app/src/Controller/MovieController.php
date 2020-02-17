<?php

namespace App\Controller;

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
     * @Route("/api/movies/{id}", name="get_movie", methods={"GET"})
     * @param $id
     * @return Response
     */
    public function getOneMovie($id){
        $movie = $this->entityManager->getRepository(Movie::class)->findOneBy(['id'=> $id]);
        $data = $this->transformSingleMovie($movie);
        return new Response(json_encode($data));

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
            'year_watched'=>$movie->getYearWatched()
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
            ->setYearWatched($data['year_watched']);

        $this->entityManager->persist($movie);
        $this->entityManager->flush();

        return new JsonResponse(['text'=>'Successfully added a new movie']);
    }

    /**
     * @Route("/api/movie/update/{id}", name="update_movie", methods={"PUT"})
     * @param $id
     * @param Request $request
     * @return JsonResponse
     */
    public function updateMovie($id, Request $request){
        $movie = $this->entityManager->getRepository(Movie::class)->findOneBy(['id'=> $id]);
       // $data = $this->transformSingleMovie($movie);
        $data = json_decode($request->getContent(),true);
        $movie->setTitle($data['title'])
            ->setCreatedAt()
            ->setUpdateAt()
            ->setYearWatched($data['year_watched']);
        $this->entityManager->persist($movie);
        $this->entityManager->flush();

        return new JsonResponse(['text'=>'Movie with id '.$id.' edited successful']);
    }

    /**
     * @Route("/api/movie/delete/{id}", name="delete_movie", methods={"DELETE"})
     * @param $id
     * @return JsonResponse
     */

    public function deleteMovie($id){
        $movie = $this->entityManager->getRepository(Movie::class)->findOneBy(['id'=> $id]);
        if ($movie) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($movie);
            $entityManager->flush();
        }

        return new JsonResponse(['text'=>'Movie with id '.$id.' deleted successful']);

    }

    public function serializer($data, SerializerInterface $serializer){
        return $this->$serializer->serialize($data, 'json');
    }
}
