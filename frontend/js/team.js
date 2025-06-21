document.addEventListener('DOMContentLoaded', async () => {
  const container = document.querySelector('.row.g-4');
  const modalContainer = document.getElementById('modals-container');
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios.get('http://localhost:4000/team/teamInfo', { headers: { 'Authorization': token } });

    container.innerHTML = '';
    modalContainer.innerHTML = '';

    data.forEach(team => {
      const card = document.createElement('div');
      card.className = 'col-md-4';

      const teamMembersList = team.members.map(member => `
        <li>
          <a href="#" class="team-member" data-bs-toggle="modal" data-bs-target="#modal${member.name}">${member.name}</a>
        </li>`).join('');

      card.innerHTML = `
        <div class="card h-100 shadow">
          <div class="bg-dark text-white text-center py-2">
            <h5 class="mb-0">${team.name}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">${team.description}</p>
            <ul class="list-unstyled">${teamMembersList}</ul>
          </div>
        </div>
      `;
      container.appendChild(card);

      // Generate modals for each member
      team.members.forEach(member => {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = `modal${member.name}`;
        modal.tabIndex = -1;
        modal.setAttribute('aria-labelledby', `modal${member.name}Label`);
        modal.setAttribute('aria-hidden', 'true');

        modal.innerHTML = `
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal${member.name}Label">${member.name} - ${team.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><strong>Email:</strong> ${member.email}</p>
               
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary chat-btn" data-name="${member.name}">Chat</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        `;
        modalContainer.appendChild(modal);
      });
    });

    // Attach chat buttons (reuse your existing chat logic)
    document.querySelectorAll('.chat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        openChat(name);
        const modal = bootstrap.Modal.getInstance(btn.closest('.modal'));
        if (modal) modal.hide();
      });
    });

    // Fetch client teams
    const clientData = await axios.get('http://localhost:4000/team/clientTeamInfo', {
      headers: { 'Authorization': token }
    });

    clientData.data.forEach(clientTeam => {
      const card = document.createElement('div');
      card.className = 'col-md-4';

      const teamMembersList = clientTeam.members.map(member => `
    <li>${member.name}${member.is_lead ? ' (Lead)' : ''}</li>`).join('');

      card.innerHTML = `
    <div class="card h-100 shadow">
      <div class="bg-dark text-white text-center py-2">
        <h5 class="mb-0">${clientTeam.name}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">${clientTeam.description}</p>
        <ul class="list-unstyled">${teamMembersList}</ul>
      </div>
    </div>
  `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading teams:', err);
    alert('Failed to load team data.');
  }
});
