      	    import Bussinesses from '../controllers/bussiness';
            import Staffs from '../controllers/staff';

        export default (app) => {

          app.get('/api', (req, res) => res.status(200).send({
            message: 'Welcome to the project API!',
          }));

          app.post('/api/bussinesses', Bussinesses.signUp); // API route for bussiness to signup
          app.post('/api/bussinesses/:bussinessId/staffs', Staffs.create); // API route for bussiness to create a staff
          app.get('/api/staffs', Staffs.list); // API route for user to get all staff in the database
          app.put('/api/staffs/:staffId', Staffs.modify); // API route for staff to modify a staff
	  app.delete('/api/staffs/:staffId', Staffs.delete); // API route for staff to delete a staff
        };
