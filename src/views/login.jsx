import React from "react";

const Login = props => {

    return (

        <body class="d-flex justify-content-center">


            <div id = "login-form" class="card w-25 justify-content-center mt-5">

                <div class="card-body">

                    <h1 class = "text-center fa-6x"><i class="fa-regular fa-circle-user"></i></h1>
                    <h3 class="card-title text-center mt-2">Iniciar Sesión</h3>
                    <h5 class="card-subtitle text-muted text-center mb-4">Punto de Venta</h5>

                    <form action="">

                        <div className="form-group">

                            <label class="mb-2" htmlFor="">Usuario</label>
                            <input class="form-control mb-2" type="text" placeholder="Ingrese su nombre de usuario" />

                        </div>

                        <div className="form-group mb-4">

                            <label class="mb-2" htmlFor="">Contraseña</label>
                            <input class="form-control mb-2" type="password" placeholder="Ingrese su contraseña" />

                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary mt-2 ">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    )

}

export default Login