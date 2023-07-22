function refreshOnLovelaceChange() {
    const ha = document.querySelector("home-assistant")
    if (!ha || !ha.shadowRoot) return
    const nm = ha.shadowRoot.querySelector('notification-manager')
    if (!nm || !nm.shadowRoot) return
    const haToast = nm.shadowRoot.querySelector('ha-toast')
    if (!haToast) return
    if (haToast.text === 'The Lovelace UI configuration for this dashboard was updated. Refresh to see changes?') {
        console.log("Refreshing page...")
        document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("#layout > app-header > app-toolbar > ha-button-menu > mwc-list-item:nth-child(2)").click()
    }
}

setInterval(refreshOnLovelaceChange, 500);