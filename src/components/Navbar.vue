<template>
  <div class="sticky-top">
    <nav class="navbar navbar-light bg-light shadow">
      <div class="container-fluid">
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle navbar-brand"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a class="dropdown-item" href="/makanan/home">CRUD</a>
            </li>
            <li><a class="dropdown-item" href="/api/home">API Quotes</a></li>
            <li>
              <a class="dropdown-item" href="/apicorona/home">API Kawal Korona</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>