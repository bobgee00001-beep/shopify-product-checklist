// Shopify Product Quality Checklist App
// Data structure for checklist items
const checklistData = [
    {
        id: 'product-title',
        title: 'Product Title',
        description: '50-70 characters with relevant keywords',
        metaInfo: '50-70 chars',
        icon: 'title'
    },
    {
        id: 'description',
        title: 'Product Description',
        description: 'Complete, rich text with key features and benefits',
        metaInfo: 'Rich text',
        icon: 'description'
    },
    {
        id: 'images',
        title: 'Product Images',
        description: 'Minimum 1 high-quality image, proper size (2048px max)',
        metaInfo: 'Min 1 image',
        icon: 'images'
    },
    {
        id: 'price',
        title: 'Pricing',
        description: 'Correct price set, variants pricing consistent',
        metaInfo: 'Correct price',
        icon: 'price'
    },
    {
        id: 'sku',
        title: 'SKU Numbers',
        description: 'Unique SKU with consistent format for each variant',
        metaInfo: 'Unique format',
        icon: 'sku'
    },
    {
        id: 'inventory',
        title: 'Inventory Tracking',
        description: 'Inventory tracked, quantity >= 0',
        metaInfo: 'Qty >= 0',
        icon: 'inventory'
    },
    {
        id: 'categories',
        title: 'Categories & Tags',
        description: 'Proper categorization and tags for filtering/search',
        metaInfo: 'For filters',
        icon: 'categories'
    },
    {
        id: 'seo-title',
        title: 'SEO Meta Title',
        description: 'Optimized title under 60 characters for search engines',
        metaInfo: '< 60 chars',
        icon: 'seo'
    },
    {
        id: 'seo-description',
        title: 'SEO Meta Description',
        description: 'Compelling description under 160 characters',
        metaInfo: '< 160 chars',
        icon: 'seo'
    },
    {
        id: 'weight',
        title: 'Product Weight',
        description: 'Accurate weight for shipping calculations',
        metaInfo: 'Shipping',
        icon: 'weight'
    },
    {
        id: 'variants',
        title: 'Product Variants',
        description: 'If present, all variants complete with unique SKUs',
        metaInfo: 'If applicable',
        icon: 'variants'
    }
];

// SVG Icons
const icons = {
    title: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>`,
    description: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    images: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    price: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    sku: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    inventory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    categories: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
    seo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    weight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.54 8.46"/><path d="M12 12l9.46-3.54"/></svg>`,
    variants: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`
};

const statusIcons = {
    neutral: `<svg class="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    pass: `<svg class="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    fail: `<svg class="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
};

// State management
let checklistState = {};

// Initialize state
function initState() {
    checklistData.forEach(item => {
        checklistState[item.id] = 'neutral';
    });
    
    // Try to load from localStorage
    const saved = localStorage.getItem('shopify-checklist-state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            Object.assign(checklistState, parsed);
        } catch (e) {
            console.error('Failed to parse saved state:', e);
        }
    }
}

// Save state
function saveState() {
    localStorage.setItem('shopify-checklist-state', JSON.stringify(checklistState));
}

// Create checklist item HTML
function createChecklistItem(item) {
    const status = checklistState[item.id] || 'neutral';
    const iconHtml = icons[item.icon] || icons.title;
    
    return `
        <div class="checklist-item status-${status}" data-id="${item.id}">
            <div class="status-icon-wrapper">
                ${statusIcons[status] || statusIcons.neutral}
            </div>
            <div class="checklist-content">
                <div class="checklist-title">${item.title}</div>
                <div class="checklist-description">${item.description}</div>
                <div class="checklist-meta">
                    <span class="meta-tag">${item.metaInfo}</span>
                </div>
            </div>
            <div class="status-buttons">
                <button class="status-btn btn-pass ${status === 'pass' ? 'active' : ''}" data-status="pass" data-id="${item.id}" title="Mark as passed">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </button>
                <button class="status-btn btn-fail ${status === 'fail' ? 'active' : ''}" data-status="fail" data-id="${item.id}" title="Mark as failed">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
        </div>
    `;
}

// Render checklist
function renderChecklist() {
    const container = document.getElementById('checklistContainer');
    container.innerHTML = checklistData.map(item => createChecklistItem(item)).join('');
}

// Update item status
function updateStatus(id, status) {
    checklistState[id] = status;
    saveState();
    
    const item = document.querySelector(`.checklist-item[data-id="${id}"]`);
    if (!item) return;
    
    // Update visual state
    item.className = `checklist-item status-${status}`;
    item.querySelector('.status-icon-wrapper').innerHTML = statusIcons[status];
    
    // Update button states
    const passBtn = item.querySelector('.btn-pass');
    const failBtn = item.querySelector('.btn-fail');
    
    passBtn.classList.toggle('active', status === 'pass');
    failBtn.classList.toggle('active', status === 'fail');
    
    updateProgress();
}

// Update progress
function updateProgress() {
    const total = checklistData.length;
    const completed = Object.values(checklistState).filter(s => s === 'pass').length;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('progressPercentage').textContent = `${percentage}%`;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('totalCount').textContent = total;
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('shopify-checklist-theme', newTheme);
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('shopify-checklist-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Reset checklist
function resetChecklist() {
    if (confirm('Are you sure you want to reset all checklist items?')) {
        checklistData.forEach(item => {
            checklistState[item.id] = 'neutral';
        });
        saveState();
        renderChecklist();
        updateProgress();
        attachEventListeners();
    }
}

// Export report  
function exportReport() {
    const productName = document.getElementById('productName').value || 'Unnamed Product';
    const productId = document.getElementById('productId').value || 'N/A';
    const date = new Date().toLocaleString();
    
    const completed = Object.values(checklistState).filter(s => s === 'pass').length;
    const failed = Object.values(checklistState).filter(s => s === 'fail').length;
    const neutral = Object.values(checklistState).filter(s => s === 'neutral').length;
    
    let report = `SHOPIFY PRODUCT QUALITY CHECKLIST REPORT
=====================================
Generated: ${date}
Product: ${productName}
Product ID: ${productId}

SUMMARY
-------
Total Items: ${checklistData.length}
Passed: ${completed} (${Math.round((completed / checklistData.length) * 100)}%)
Failed: ${failed}
Not Checked: ${neutral}

DETAILED CHECKLIST
----------------
`;
    
    checklistData.forEach(item => {
        const status = checklistState[item.id];
        const statusText = status === 'pass' ? '✓ PASS' : status === 'fail' ? '✗ FAIL' : '○ PENDING';
        report += `[${statusText}] ${item.title}\n`;
    });
    
    // Create and download file
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `product-checklist-${productName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Export as JSON
function exportJSON() {
    const productName = document.getElementById('productName').value || 'Unnamed Product';
    const productId = document.getElementById('productId').value || '';
    
    const reportData = {
        exportDate: new Date().toISOString(),
        product: {
            name: productName,
            id: productId
        },
        summary: {
            total: checklistData.length,
            passed: Object.values(checklistState).filter(s => s === 'pass').length,
            failed: Object.values(checklistState).filter(s => s === 'fail').length,
            pending: Object.values(checklistState).filter(s => s === 'neutral').length
        },
        items: checklistData.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            status: checklistState[item.id] || 'neutral',
            metaInfo: item.metaInfo
        }))
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `product-checklist-${productName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Export as CSV
function exportCSV() {
    const productName = document.getElementById('productName').value || 'Unnamed Product';
    const productId = document.getElementById('productId').value || '';
    const date = new Date().toISOString();
    
    const escapeCsv = (str) => {
        if (str === null || str === undefined) return '';
        str = String(str);
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
            return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
    };
    
    let csv = 'Shopify Product Quality Checklist\n';
    csv += `Export Date,${date}\n`;
    csv += `Product Name,${escapeCsv(productName)}\n`;
    csv += `Product ID,${escapeCsv(productId)}\n\n`;
    csv += 'Item ID,Title,Description,Status,Meta Info\n';
    
    checklistData.forEach(item => {
        const status = checklistState[item.id] || 'neutral';
        csv += `${escapeCsv(item.id)},${escapeCsv(item.title)},${escapeCsv(item.description)},${escapeCsv(status)},${escapeCsv(item.metaInfo)}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `product-checklist-${productName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Show export menu
function showExportMenu() {
    // Remove existing menu if any
    const existingMenu = document.querySelector('.export-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }
    
    const menu = document.createElement('div');
    menu.className = 'export-menu';
    menu.innerHTML = `
        <button class="export-option" data-type="txt">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Export as TXT
        </button>
        <button class="export-option" data-type="json">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Export as JSON
        </button>
        <button class="export-option" data-type="csv">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export as CSV
        </button>
    `;
    
    // Position menu relative to export button
    const exportBtn = document.getElementById('exportBtn');
    const rect = exportBtn.getBoundingClientRect();
    menu.style.cssText = `
        position: fixed;
        top: ${rect.bottom + 8}px;
        right: ${window.innerWidth - rect.right}px;
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 0.5rem;
        box-shadow: 0 4px 12px var(--shadow-lg);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    `;
    
    document.body.appendChild(menu);
    
    // Handle menu item clicks
    menu.querySelectorAll('.export-option').forEach(btn => {
        btn.style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            border: none;
            background: transparent;
            color: var(--text-primary);
            font-size: 0.9375rem;
            cursor: pointer;
            border-radius: 6px;
            transition: background 0.2s ease;
            white-space: nowrap;
        `;
        
        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'var(--bg-secondary)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'transparent';
        });
        
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            if (type === 'txt') exportReport();
            if (type === 'json') exportJSON();
            if (type === 'csv') exportCSV();
            menu.remove();
        });
    });
    
    // Close menu when clicking outside
    const closeMenu = (e) => {
        if (!menu.contains(e.target) && e.target !== exportBtn) {
            menu.remove();
            document.removeEventListener('click', closeMenu);
        }
    };
    setTimeout(() => document.addEventListener('click', closeMenu), 0);
}

// Attach event listeners
function attachEventListeners() {
    // Status buttons
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            const status = btn.dataset.status;
            
            // Toggle: if already active, set to neutral
            const currentStatus = checklistState[id];
            const newStatus = currentStatus === status ? 'neutral' : status;
            updateStatus(id, newStatus);
        });
    });
    
    // Click on item to cycle through statuses
    document.querySelectorAll('.checklist-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't trigger if clicking on buttons
            if (e.target.closest('.status-buttons')) return;
            
            const id = item.dataset.id;
            const currentStatus = checklistState[id];
            const statuses = ['neutral', 'pass', 'fail'];
            const currentIndex = statuses.indexOf(currentStatus);
            const newStatus = statuses[(currentIndex + 1) % statuses.length];
            updateStatus(id, newStatus);
        });
    });
}

// Initialize app
function init() {
    initTheme();
    initState();
    renderChecklist();
    updateProgress();
    attachEventListeners();
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetChecklist);
    
    // Export button
    document.getElementById('exportBtn').addEventListener('click', showExportMenu);
    
    // Load saved product info
    const savedName = localStorage.getItem('shopify-product-name');
    const savedId = localStorage.getItem('shopify-product-id');
    if (savedName) document.getElementById('productName').value = savedName;
    if (savedId) document.getElementById('productId').value = savedId;
    
    // Save product info on change
    document.getElementById('productName').addEventListener('input', (e) => {
        localStorage.setItem('shopify-product-name', e.target.value);
    });
    document.getElementById('productId').addEventListener('input', (e) => {
        localStorage.setItem('shopify-product-id', e.target.value);
    });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}