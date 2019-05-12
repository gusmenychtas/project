import model from '../models';

            const { Staff } = model;

            class Staffs {
              static create(req, res) {
                const { email, firstname, lastname, position, phonenumber } = req.body
                const { bussinessId } = req.params
                return Staff
                  .create({
                    email,
                    firstname,
                    lastname,
                    position,
                    phonenumber,
	            bussinessId
                  })
                  .then(staff => res.status(201).send({
                    message: `Your staff member with the lastname ${lastname} has been created successfully `,
                    staff
                  }))
                }
	      static list(req, res) {
              return Staff
                .findAll()
                .then(staffs => res.status(200).send(staffs));
            }
	    static modify(req, res) {
              const { email, firstname, lastname, position, phonenumber } = req.body
              return Staff
                .findByPk(req.params.staffId)
                .then((staff) => {
                  staff.update({
                    email: email || staff.email,
                    firstname: firstname || staff.firstname,
                    lastname: lastname || staff.lastname,
                    position: position || staff.position,
	  	    phonenumber: phonenumber || staff.phonenumber
                  })
                  .then((updatedStaff) => {
                    res.status(200).send({
                      message: 'Staff  updated successfully',
                      data: {
		    email: email || updatedStaff.email,
                    firstname: firstname || updatedStaff.firstname,
                    lastname: lastname || updatedStaff.lastname,
                    position: position || updatedStaff.position,
                    phonenumber: phonenumber || updatedStaff.phonenumber
                      }
                    })
                  })
                  .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            }
	    static delete(req, res) {
              return Staff
                .findByPk(req.params.staffId)
                .then(staff => {
                  if(!staff) {
                    return res.status(400).send({
                    message: 'Staff Not Found',
                    });
                  }
                  return staff
                    .destroy()
                    .then(() => res.status(200).send({
                      message: 'Staff successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error))
            }
            }

            export default Staffs
