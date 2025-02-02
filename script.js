// Load jsPDF dynamically

const script = document.createElement('script');

script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';

script.onload = function () {

    console.log("jsPDF loaded!");

    window.jsPDF = window.jspdf.jsPDF; // Assign jsPDF after loading

};

document.head.appendChild(script);document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('resumeForm').addEventListener('submit', function (event) {

        event.preventDefault();

        // Get form values

        const name = document.getElementById('name').value;

        const email = document.getElementById('email').value;

        const phone = document.getElementById('phone').value;

        const about = document.getElementById('about').value;

        const experience = document.getElementById('experience').value;

        const education = document.getElementById('education').value;

        const skills = document.getElementById('skills').value;

        const links = document.getElementById('links').value;

        // Populate resume preview

        document.getElementById('resume-name').innerText = name;

        document.getElementById('resume-email').innerText = email;

        document.getElementById('resume-phone').innerText = phone;

        document.getElementById('resume-about').innerText = about;

        document.getElementById('resume-experience').innerText = experience;

        document.getElementById('resume-education').innerText = education;

        document.getElementById('resume-skills').innerText = skills;

        document.getElementById('resume-links').innerText = links;

        // Show the resume preview

        document.querySelector('.form-container').style.display = 'none';

        document.getElementById('resume').style.display = 'block';

    });

    // PDF generation on click

    document.getElementById('download-btn').addEventListener('click', function () {

        if (!window.jsPDF) {

            alert('jsPDF is not loaded! Please check your CodePen JavaScript settings.');

            return;

        }

        const jsPDF = window.jsPDF;

        const doc = new jsPDF();

        

        doc.setFont("helvetica");

        doc.setFontSize(16);

        doc.text("Resume", 20, 20);

        

        // Add Name

        doc.setFontSize(18);

        doc.text("Name: " + document.getElementById('resume-name').innerText, 20, 30);

        // Add Contact Information

        doc.setFontSize(12);

        doc.text("Email: " + document.getElementById('resume-email').innerText, 20, 40);

        doc.text("Phone: " + document.getElementById('resume-phone').innerText, 20, 50);

        // Add About Section

        doc.text("About Me:", 20, 60);

        doc.setFontSize(10);

        doc.text(document.getElementById('resume-about').innerText, 20, 70, { maxWidth: 170 });

        // Add Work Experience Section

        doc.setFontSize(12);

        doc.text("Work Experience:", 20, 90);

        doc.setFontSize(10);

        doc.text(document.getElementById('resume-experience').innerText, 20, 100, { maxWidth: 170 });

        // Add Education Section

        doc.setFontSize(12);

        doc.text("Education:", 20, 120);

        doc.setFontSize(10);

        doc.text(document.getElementById('resume-education').innerText, 20, 130, { maxWidth: 170 });

        // Add Skills Section

        doc.setFontSize(12);

        doc.text("Skills:", 20, 150);

        doc.setFontSize(10);

        doc.text(document.getElementById('resume-skills').innerText, 20, 160, { maxWidth: 170 });

        // Add LinkedIn/Portfolio Link

        doc.setFontSize(12);

        doc.text("LinkedIn/Portfolio:", 20, 180);

        doc.setFontSize(10);

        doc.text(document.getElementById('resume-links').innerText, 20, 190, { maxWidth: 170 });

        // Save PDF

        doc.save('resume.pdf');

    });

    // Save resume feature

    document.getElementById('save-btn').addEventListener('click', function () {

        alert('Resume Saved Successfully!');

    });

});