const tabs = document.getElementById("tabs");
const allJobs = document.getElementById("allJobs");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCount = document.getElementById("jobCount");
let activeTab = "All";
const tabImage = "./asset/jobs.png";

document.querySelectorAll("[data-id]").forEach(card => {
    card.dataset.status = "All";
    setBadge(card,"All");
});

function updateDashboard() {
    const cards = document.querySelectorAll("[data-id]");
    totalCount.innerText = cards.length;
    let interview = 0;
    let rejected = 0;
    cards.forEach(card => {
        if (card.dataset.status === "Interview") interview++;
        if (card.dataset.status === "Rejected") rejected++;
    });
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
}

function filterTab() {
    const cards = document.querySelectorAll("[data-id]");
    let visible = 0;
    cards.forEach(card => {
        if (activeTab === "All") {
            card.style.display = "flex"
            visible++;
        } else {
            if (card.dataset.status === activeTab) {
                card.style.display = "flex";
                visible++;
            } else {
                card.style.display = "none";
            }
        }
    });
    jobCount.innerText = visible;
    showEmptyState(visible);
}
function showEmptyState(count) {
    let oldEmpty = document.getElementById("emptyMsg");
    if (oldEmpty) oldEmpty.remove();
    if (activeTab !== "All" && count === 0) {
        const div = document.createElement("div");
        div.id = "emptyMsg";
        div.className = "bg-base-100 border border-base-300 p-6 rounded-sm flex flex-col items-center justify-center text-center min-h-[400px]";
        div.innerHTML = `<img src="${tabImage}" class="w-20 h-20 mb-4" alt="logo">
        <h2 class="font-bold text-lg">No jobs available</h2>
        <p class="text-sm text-neutral/70 mt-2">Check back soon for new job opportunities</p>
        `;
        allJobs.prepend(div);
    }
}
function setBadge(card, status) {
    const notBadge = card.querySelector("[data-status]");
    const badgeText = notBadge.querySelector("h2");
    if (status === "All") {
        badgeText.innerText = "NOT APPLIED";
        notBadge.className = "bg-neutral-content bg-soft w-fit p-2 rounded-sm";
        return;
    }
    if (status === "Interview") {
        badgeText.innerText = "INTERVIEW";
        notBadge.className = "w-fit p-2 rounded-sm bg-green-100";
        return;
    }
    if (status === "Rejected") {
        badgeText.innerText = "REJECTED";
        notBadge.className = "w-fit p-2 rounded-sm bg-red-100";
        return;
    }
}

function activeTabs(btn) {
    tabs.querySelectorAll("button").forEach(c => {
        c.classList.remove("bg-[#3B82F6]", "text-white");
        c.classList.add("bg-neutral-content","bg-soft");
    });
    btn.classList.remove("bg-neutral-content","bg-soft")
    btn.classList.add("bg-[#3B82F6]", "text-white");
}

tabs.addEventListener("click", function (a) {
    const btn = a.target.closest("button");
    if (!btn) return;
    activeTab = btn.dataset.tab;
    activeTabs(btn);
    filterTab();
});

allJobs.addEventListener("click", function (a) {
    const card = a.target.closest("[data-id]");
    if (!card) return;
    if (a.target.closest(".btnInterview")) {
        card.dataset.status = "Interview";
        setBadge(card, "Interview");
    }
    if (a.target.closest(".btnRejected")) {
        card.dataset.status = "Rejected";
        setBadge(card, "Rejected");
    }
    if (a.target.closest(".btnDelete")) {
        card.remove();
    }
    updateDashboard();
    filterTab();
});

updateDashboard();
filterTab();