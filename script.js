$(() => {
    let courseData = [];
    fetch("Data.json")
    .then((rawData) => rawData.json())
    .then(({ semester, subjects }) => {
        

        semester.forEach(({ id, description }) => { 
            $("#table-with-data").append(
                ` <tr>    
                      <th colspan="7" class="class-color1">${description} </th>  
                 </tr>
                 <tr>
                    <th>Course</th>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Grade</th>
                    <th>Remarks</th>
                    <th>Course</th>
                    <th>Term</th>
                 </tr>`
            );

            let semSubject = subjects.filter(subject => subject["semLevels"] == id); // Fix filter syntax and consistent capitalization

            semSubject.forEach(course => {
                let rowClass = '';
                if (course["remarks"] === "In progress") {
                    rowClass = 'class-yellow'; 
                } else if (course["remarks"] === "") {
                    rowClass = 'class-white'; 
                }

                $("#table-with-data").append(
                    `<tr class="${rowClass}">
                        <td>${course["course"]}</td>
                        <td>${course["des"]}</td>
                        <td>${course["unit"].toFixed(1)}</td>
                        <td>${course["grade"]}</td>
                        <td>${course["remarks"]}</td>
                        <td>${course["course"]}</td> 
                        <td>${course["term"]}</td>
                    </tr>`
                );
            });
            
        });
    });
});