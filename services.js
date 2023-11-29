const JOB_CATEGORY = {

    createJobCategry : function(name, role, title, image){
        const FormD = new FormData();
        FormD.append("name", name);
        FormD.append("role", role);
        FormD.append("title", title);
        FormD.append("image", $("#image").prop("files")[0]);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/createjobcategory',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });
    },

    createplan : function(plan_name, price, extra_details, features, billing_duration, description){
        const FormD = new FormData();
        FormD.append("plan_name", plan_name);
        FormD.append("price", price);
        FormD.append("extra_details", extra_details);
        FormD.append("features", features);
        FormD.append("billing_duration", billing_duration);
        FormD.append("description", description);

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/createplan',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });

    },

    addplanfeature : function(plan_name, feature){
        const FormD = new FormData();
        FormD.append("plan_name", plan_name);
        FormD.append("feature", feature);
        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/addplanfeature',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });

    },

    generalcontent : function(name, description, comment){
        const FormD = new FormData();
        FormD.append("name", name);
        FormD.append("description", description);
        FormD.append("comment", comment);

        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/creategeneralcontent',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });
    },

    createcasestudy : function(description, title, image){
        const FormD = new FormData();
        FormD.append("description", description);
        FormD.append("title", title);
        FormD.append("image", $("#image").prop("files")[0]);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/createcasestudy',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });
    },
    
    
}

const CREATE_PROGRAM = {

    createprogram : function(title, programTitle, reviews, subtitle, description,
        features, start_date, end_date, price,learning_scheme,why,prerequisite,best_fit,
        program_flow, rating,instructor_name, instructor_details){
        const FormD = new FormData();

        FormD.append("description", description);
        FormD.append("title", title);
        FormD.append("programTitle", programTitle);
        FormD.append("reviews", reviews);
        FormD.append("subtitle", subtitle);
        FormD.append("features", features);
        FormD.append("start_date", start_date);
        FormD.append("end_date", end_date);
        FormD.append("price", price);
        FormD.append("learning_scheme", learning_scheme);
        FormD.append("why", why);
        FormD.append("prerequisite", prerequisite);
        FormD.append("best_fit", best_fit);
        FormD.append("program_flow", program_flow);
        FormD.append("rating", rating);
        FormD.append("instructor_name", instructor_name);
        FormD.append("instructor_details", instructor_details);
        FormD.append("image", $("#image").prop("files")[0]);

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/createprogramcategory',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });


    }

}