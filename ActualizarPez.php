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
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
     

		<script src="public/actualizarPez.min.js" defer></script>
		

    	
		<link href="css.css" rel="stylesheet" type="text/css" />    	
  </head>
  <body>
  		<div class="spin" data-spin></div>
  		<?php
		   require_once 'servidor/listadoPescaderia2.php';
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
          				<a class="dropdown-item" href="inicio.html">Inicio </a>
          				<a class="dropdown-item" href="eliminarPez.php">Eliminar </a>                    
        			</div>
        		</li>
    		</ul>
		</div>
	</nav>		
  	<h1 class="mb-4">Pescaderia</h1>
    <h4 class="my-3">actualizar pescado</h4>
    <div class="border border-primary">
	    <form id="formularioEditar">
	    	<div class ="row">
	    		<div class="col-auto">
			        <div class="form-group"> <!--  nombre -->
			            <label for="nombreEditarSelect" class="control-label">Seleccionar pez:</label>
			            <select class="form-control" id="nombreEditarSelect" name="nombreEditarSelect">
			    			<?php
						        while($pescado = $pescaderias->fetch_assoc()) {
						            ?>
						            
						            	<?php 
						            				echo "<option id='".$pescado["nombre"]."' value='".$pescado["nombre"]."'>". $pescado["nombre"]."</option>";

						            	?>
						            		
						               
						            <?php
						        }
						    ?>
			            </select> 
			        </div>                    
		        </div> 	    		
	    	</div>     
	    	<div class="row">
	    		<div class="col-auto">
			        <div class="form-group"> <!--  nombre -->
			            <label for="nombreEditar" class="control-label">nombre de pescado:</label>
			            <input type="text" class="form-control" id="nombreEditar" name="nombreEditar" placeholder="Nombre">
			            <div class="divErrores text-danger">
                   
	                	</div>	
			        </div>                    
		        </div> 		                
		        <div class="col-auto">                
			        <div class="form-group"> <!--  tipo -->
			            <label for="tipoEditar" class="control-label">tipo del producto:</label>
			            <select class="form-control" id="tipoEditar" name="tipoEditar">
			            	<option value="">-Selecciona tipo-</option>
			                <option value="molusco">molusco</option>
			                <option value="pescado">pescado</option>
			            </select>
			            <div class="divErrores text-danger">
                   
	                	</div>				              
		        	</div>    
	        	</div>
	        	<div class="col-auto">
			        <div class="form-group"> <!-- tamaño-->
			            <label for="tamañoEditar" class="control-label">tamaño:</label>
			            <input type="text" class="form-control" id="tamañoEditar" name="tamañoEditar" placeholder="Tamaño">
			            <div class="divErrores text-danger">
                   
	                	</div>	
			        </div>  
		        </div>  
		        <div class="col-auto">
			        <div class="form-group"> <!-- nombrecientifico -->
			            <label for="NCEditar" class="control-label">nombrecientifico:</label>
			            <input type="text" class="form-control" id="NCEditar" name="NCEditar" placeholder="NC">
			            <div class="divErrores text-danger">
                   
	                	</div>	
			        </div>
			    </div> 
			    <div class="col-auto">
			        <div class="form-group"> <!-- vive-->
			            <label for="viveEditar" class="control-label">vive</label>
			            <select class="form-control" id="viveEditar" name="viveEditar">
			            	<option value="">-Selecciona vive-</option>
			                <option value="mar">mar</option>
			                <option value="oceano">oceano</option>
                            <option value="rio">rio</option>
                            <option value="lago">lago</option>
			            </select>  
			            <div class="divErrores text-danger">
                   
	                	</div>				            
			        </div>
			    </div>       		       	              	
	    	</div>
	        <div class="row">
	        	<div class="col-auto">
			        <div class="form-group"> <!-- Submit Button -->
			            <button type="submit" class="btn btn-success" id="botonEditar">Editar</button>
			        </div>
		    	</div>
	        </div>             
	    </form>
	</div>	
	<div id="divResultadoEditar">
		
	</div>	
	
  </body>
</html>