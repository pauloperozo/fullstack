<?php

namespace App\Controller;

use App\Entity\Owner;
use App\Form\OwnerType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/owner")
 */
class OwnerController extends AbstractController
{
    /**
     * @Route("/", name="app_owner_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $entityManager): Response
    {
        $owners = $entityManager
            ->getRepository(Owner::class)
            ->findAll();

        return $this->render('owner/index.html.twig', [
            'owners' => $owners,
        ]);
    }

    /**
     * @Route("/new", name="app_owner_new", methods={"GET", "POST"})
     */
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $owner = new Owner();
        $form = $this->createForm(OwnerType::class, $owner);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($owner);
            $entityManager->flush();

            return $this->redirectToRoute('app_owner_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('owner/new.html.twig', [
            'owner' => $owner,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="app_owner_show", methods={"GET"})
     */
    public function show(Owner $owner): Response
    {
        return $this->render('owner/show.html.twig', [
            'owner' => $owner,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_owner_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Owner $owner, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(OwnerType::class, $owner);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_owner_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('owner/edit.html.twig', [
            'owner' => $owner,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="app_owner_delete", methods={"POST"})
     */
    public function delete(Request $request, Owner $owner, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$owner->getId(), $request->request->get('_token'))) {
            $entityManager->remove($owner);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_owner_index', [], Response::HTTP_SEE_OTHER);
    }
}
