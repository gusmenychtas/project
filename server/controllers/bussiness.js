import model from '../models';

        const { Bussiness } = model;

        class Bussinesses {
          static signUp(req, res) {
            const { name, loc, kind } = req.body
              return Bussiness
                .create({
                  name,
                  loc,
                  kind
                })
                .then(bussinessData => res.status(201).send({
                  success: true,
                  message: 'Bussiness successfully created',
                  bussinessData
                }))
            }
        }

        export default Bussinesses;
