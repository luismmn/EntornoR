<?php
    require_once 'servidor/Paginar.php';
 
    $conexion = new mysqli( 'localhost', 'root', '', 'pescaderia');
    $conexion->query("SET NAMES 'utf8'");
 
    $pagina       = ( isset( $_GET['page'] ) ) ? $_GET['page'] : 1;
    $enlaces      = ( isset( $_GET['enlaces'] ) ) ? $_GET['enlaces'] : 5;
    $consulta      = "SELECT * FROM pescaderia";
    
    $paginar  = new Paginar($conexion, $consulta);
    $resultados    = $paginar->getDatos($pagina);
?>
    <head>
        <title>Paginación en PHP</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
        integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" 
        crossorigin="anonymous">

        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    </head>
    <body>
        <div class="container">
                <div class="col-md-12 ">
                    <h1 style="text-align:center">Test Páginacion en PHP</h1>
                    <ul class="pager">
                        <?php echo $paginar->crearLinks( $enlaces); ?>
                    </ul>
                    <table class="table table-hover table-condensed table-bordered ">
                            <thead>
                                <tr style="background:#337ab7; color:white;">
                                    <th width="30%">nombre</th>
                                    <th width="30%">nombrecientifico</th>
                                    <th width="30%">vive</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php for( $i = 0; $i < count($resultados->datos); $i++ ): ?>
                               <tr>
                                            <td><?php echo $resultados->datos[$i]['nombre']; ?></td>
                                            <td><?php echo $resultados->datos[$i]['nombrecientifico']; ?></td>
                                            <td><?php echo $resultados->datos[$i]['vive']; ?></td>
                                    </tr>
                                <?php endfor; ?>
                            </tbody>
                    </table>
                    <ul class="pagination">
                        <?php echo $paginar->crearLinks( $enlaces); ?>
                    </ul>
              
                </div>
        </div>
        </body>
</html>