<template>
  <div
    id="imageSection"
    class="d-flex justify-content-between align-self-center"
  >
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
    <div class="justify-content-center align-self-end">
      <button type="button" class="btn btn-primary">Edit Profile</button>
    </div>
  </div>

  <h2 class="name">Isânio Vitor Félix Araujo</h2>
  <h3 class="nickName">@isaniovitor</h3>

  <p id="description">
    Lorem ipsum dolor sit voluptatem fugit, omnis incidunt facilis qui expedita
    reprehenderit!
  </p>

  <div>
    <ul id="localizationSection">
      <li class="localizationChild">
        <i class="bi bi-geo-alt"></i>
        <a href="#">Fortaleza</a>
      </li>
      <li class="localizationChild">
        <i class="bi bi-calendar3"></i>
        <a href="#">Joined January 2010</a>
      </li>
    </ul>

    <ul id="statisticSection">
      <li class="statisticChild">
        <a href="#">
          <strong>98</strong>
          Following
        </a>
      </li>
      <li class="statisticChild">
        <a href="#">
          <strong>20</strong>
          Followers
        </a>
      </li>
    </ul>
  </div>

  <nav class="d-flex">
    <li class="menuChild d-flex col justify-content-center align-self-center">
      <a href="#">Tzeets</a>
    </li>
    <li class="menuChild d-flex col justify-content-center align-self-center">
      <a href="#">Tzeets & replies</a>
    </li>
    <li class="menuChild d-flex col justify-content-center align-self-center">
      <a href="#">Media</a>
    </li>
    <li class="menuChild d-flex col justify-content-center align-self-center">
      <a href="#">Links</a>
    </li>
  </nav>
</template>
