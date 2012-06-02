window.onload = function() {
    
    var link = false;
    var ui = new CnvUI({elem:"#canvas", width:320, height:260,
                        foreground:"#009", background:"#ededed", lineWidth:3});
    
    ui.set({type:"label", align:"left", x:5, y:5, width:100, value:"CnvUI v" + ui.version});
    
    ///// Panel /////
    var panel = ui.set({type:"panel", x:20, y:30, width:280, height:200,
                        background:"#dcdcdc"});
    
    
    ///// VSlider /////
    var label0 = panel.set({id:"vslider-label", type:"label", x:45, y:30,
                            align:"center", value:"40"});
    
    var vslider = panel.set({id:"vslider", type:"vslider", x:40, y:55,
                             value:40, change:function(value) {
                                 label0.update(this.value);
                                 if (link) {
                                     knob1.update(this.value);
                                     knob2.update(this.value / 20);
                                     label1.update(knob1.value);
                                     label2.update(knob2.value);
                                 }
                             }});
    panel.set({type:"label", x:45, y:155, width:60,
               align:"center", value:"vslider"});
    
    
    ///// Knob /////
    var label1 = panel.set({type:"label", x:105, y:30,
                            align:"center", value:"50"});
    var knob1 = panel.set({type:"knob", x:105, y:95,
                           value:40, change:function(value) {
                               label1.update(this.value);
                               if (link) {
                                   panel.getWidgetById("vslider").update(this.value);
                                   knob2.update(this.value / 20);
                                   label0.update(vslider.value);
                                   label2.update(knob2.value);
                               }
                           }});
    panel.set({type:"label", x:105, y:155, width:60,
               align:"center", value:"knob"});
    
    
    var label2 = panel.set({type:"label", x:165, y:30,
                            align:"center", value:"0"});
    var knob2 = panel.set({type:"knob", x:165, y:95, max:5,
                           value:0, change:function(value) {
                               label2.update(this.value);
                               if (link) {
                                   panel.getWidgetById("vslider").update(this.value * 20);
                                   knob1.update(this.value * 20);
                                   label0.update(vslider.value);
                                   label1.update(knob1.value);
                               }
                           }});
    panel.set({type:"label", x:165, y:155, width:60,
               align:"center", value:"knob"});
    
    
    ///// Switch /////
    var label3 = panel.set({type:"label", x:225, y:30,
                            align:"center", value:"OFF"});
    var sw = panel.set({type:"switch", x:220, y:80, max:5,
                        value:0, change:function(value) {
                            label3.update(this.value ? "ON" : "OFF");
                            link = this.value;
                        }});
    panel.set({type:"label", x:225, y:155, width:60,
               align:"center", value:"switch"});
};
