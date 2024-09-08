function generateResume() {
   const name = document.getElementById('idname').value;
   const address = document.getElementById('idaddress').value;
   const phone = document.getElementById('idphone').value;
   const email = document.getElementById('idemail').value;
   const linkedin = document.getElementById('idlinkedin').value;
   const objective = document.getElementById('obj').value;
   const degree = document.getElementById('iddegree').value;
   const university = document.getElementById('id-uni').value;
   const eduDates = document.getElementById('iddates').value;
   const jobTitle = document.getElementById('idtitle').value;
   const company = document.getElementById('company').value;
   const responsibilities = document.getElementById('idresp').value;
   const skills = document.getElementById('idskills').value;

   const resumeData = {                name,                address,                phone,                email,                linkedin,                objective,                degree,                university,                eduDates,                jobTitle,                company,                responsibilities, skills
   };

   // Convert resume data to query string
   const queryString = new URLSearchParams(resumeData).toString();

   // Redirect to resume.html with resume data
   window.location.href = `resume.html?${queryString}`;
} 
