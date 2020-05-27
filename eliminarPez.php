<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
		<meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
		<title>Recuperacion</title>
	    <link rel="stylesheet"
	          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
	          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
	          crossorigin="anonymous">

	    <!-- Incluimos las librerís JS -->
		<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
	            crossorigin="anonymous">

	    </script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
	            integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
	            crossorigin="anonymous">
	    </script>

		<script src="public/eliminarPez.min.js" defer></script>
		<link rel="stylesheet" type="text/css" href="DataTables/datatables.min.css" />
   		 <script type="text/javascript" src="DataTables/datatables.min.js"></script>

    	
		<link href="css.css" rel="stylesheet" type="text/css" />

		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.css">
		<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.js"></script>
  </head>
  <body>
  		<div class="spin" data-spin></div>
  		<?php
		   require_once 'servidor/listadoPescaderia.php';
		?>
	<nav class="navbar navbar-dark bg-primary mb-2">
  		<a class="navbar-brand text-light" href="inicio.html">Principal</a>
  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    		<span class="navbar-toggler-icon"></span>
  		</button>
  		<div class="collapse navbar-collapse" id="navbarNav">
    		<ul class="navbar-nav">
				<li class="nav-item dropdown">
        			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          				Pescaderia
        			</a>
        			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
          				<a class="dropdown-item" href="index.html">Buscar </a>         				
          				<a class="dropdown-item" href="index2.html">Mostrar </a>
          				<a class="dropdown-item" href="index3.html">Añadir </a>
          				<a class="dropdown-item" href="ActualizarPez.php">Editar </a>
          				<a class="dropdown-item" href="inicio.html">Inicio </a>                    
        			</div>
        		</li>
    		</ul>
		</div>
	</nav>	
  	<h1 class="mb-4">Pescaderia</h1>
		<div class="mt-2">
			<h1 class="my-3">ELIMINAR</h1>
			<table class="table table-striped table-hover" id="tablaEliminar">
			  <thead>
			    <tr>
			      <th scope="col">nombre</th>
			      <th scope="col">nombrecientifico</th>
			      <th scope="col">tipo</th>
			      <th scope='col'>tamaño</th>
			      <th scope='col'>vive</th>
			      <th scope="col"></th>
			    </tr>
			    </thead>

			  <tbody>
			    <?php
			        while($pescado = $pescaderias->fetch_assoc()) {
			            ?>
			            <tr data-idpez="<?php echo $pescado["id"]; ?>">
			            	<td><?php echo $pescado["nombre"]; ?></td>
			                <td><?php echo $pescado["nombrecientifico"]; ?></td>
			                <td><?php echo $pescado["tipo"]; ?></td>
			                <td><?php echo $pescado["tamaño"]; ?></td>
			                <td><?php echo $pescado["vive"]; ?></td>
			                <td><button data-idEliminar="<?php echo $pescado["id"]; ?>" data-accion="eliminar">Eliminar</button></td>
			            </tr>    
			            <?php
			        }
			    ?>
			</tbody>
			</table>		
		</div>
		<div id="modalEliminar" class="modal" tabindex="-1" role="dialog">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title">Eliminar</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <p>¿Seguro que quiere borrar este producto?</p>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
				        <button id="botonConfirmarEliminar" type="button"  class="btn btn-primary" data-accion="confirmar-eliminar" data-ideliminar="">Confirmar</button>
				    </div>
				</div>
			</div>
		</div>		
  </body>
  <script>
    $(document).ready(function(){
        $('#tablaEliminar').DataTable();
    });
    </script>
</html>