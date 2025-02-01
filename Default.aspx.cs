using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JuegoMemoria
{
    public partial class _Default : Page
    {
        private static readonly string[] imagenes = {
            "Images/carta1.png", "Images/carta1.png",
            "Images/carta2.png", "Images/carta2.png",
            "Images/carta3.png", "Images/carta3.png",
            "Images/carta4.png", "Images/carta4.png",
            "Images/carta5.png", "Images/carta5.png",
            "Images/carta6.png", "Images/carta6.png",
            "Images/carta7.png", "Images/carta7.png",
            "Images/carta8.png", "Images/carta8.png"
        };

        /// <summary>
        /// Método que se ejecuta al cargar la página.
        /// Si es la primera carga, genera las cartas.
        /// </summary>
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                ReiniciarJuego();
            }
            catch (Exception ex)
            {
                lblMensajeError.Text = "Ocurrió un error al generar las cartas: " + ex.Message;
                lblMensajeError.Visible = true;
            }
        }

        /// <summary>
        /// Genera las cartas y las muestra en la interfaz.
        /// </summary>
        private void ReiniciarJuego()
        {
            try
            {
                var cartas = imagenes.Select((img, index) => new { ID = index, Imagen = img }).OrderBy(_ => Guid.NewGuid()).ToList();
                Session["Cartas"] = cartas;
                rptCartas.DataSource = cartas;
                rptCartas.DataBind();
            }
            catch (Exception ex)
            {
                lblMensajeError.Text = "Ocurrió un error al generar las cartas: " + ex.Message;
                lblMensajeError.Visible = true;
            }
        }

        protected void btnReiniciar_Click(object sender, EventArgs e)
        {
            ReiniciarJuego();
        }
    }
}