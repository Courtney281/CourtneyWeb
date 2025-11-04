// Basic interactive helpers
document.addEventListener('DOMContentLoaded', function(){
  // Year placeholders
  const years = [ 'year', 'year-2','year-3','year-4','year-5'];
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // "Download CV" button behaviour (link to PDF or DOCX in repo)
  const dl = document.getElementById('download-cv');
  if(dl){
    dl.addEventListener('click', function(){
      // Update the path to your actual CV file in the repo (e.g., assets/Courtney_CV.pdf)
      const cvPath = 'assets/Courtney_Arnold-Harrison_CV.pdf';
      // try to open
      window.open(cvPath, '_blank');
    });
  }
});

// Form handler for problem-solving page.
// This builds a mailto: link that pre-fills subject and body, then opens the user's mail client.
function handleFormSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value.trim());
  const userEmail = encodeURIComponent(form.email.value.trim());
  const type = encodeURIComponent(form.type.value);
  const date = encodeURIComponent(form.date.value.trim());
  const notes = encodeURIComponent(form.notes.value.trim());

  const to = 'restaurant@example.com'; // replace with actual restaurant email
  const subject = encodeURIComponent(`[Website Enquiry] ${type} — ${name}`);
  const bodyLines = [
    `Name: ${decodeURIComponent(name)}`,
    `Contact email: ${decodeURIComponent(userEmail)}`,
    `Request type: ${decodeURIComponent(type)}`,
    `Preferred date/time: ${decodeURIComponent(date)}`,
    `Details: ${decodeURIComponent(notes)}`,
    '',
    '---',
    'Sent via website enquiry form'
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));

  const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
  // open mail client
  window.location.href = mailto;
  return false;
}

