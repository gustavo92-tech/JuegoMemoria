<%@ Page Title="Juego de Memoria" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JuegoMemoria._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <link rel="stylesheet" type="text/css" href="Styles.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="Scripts.js"></script>

    <div class="game-container">
        <asp:Repeater ID="rptCartas" runat="server">
            <ItemTemplate>
                <div class="card" onclick="voltearCarta(this, '<%# Eval("ID") %>')">
                    <img src="Images/back.jpg" class="card-back" />
                    <img src='<%# Eval("Imagen") %>' class="card-front hidden" />
                </div>
            </ItemTemplate>
        </asp:Repeater>
        <br />
    </div>

    <asp:Label ID="lblMensajeError" runat="server" ForeColor="Red" Visible="false"></asp:Label>

    <div class="btn-container">
        <asp:Button ID="btnReiniciar" runat="server" Text="Reiniciar Juego" OnClick="btnReiniciar_Click" CssClass="btn-restart" />
    </div>
</asp:Content>
